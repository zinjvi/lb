<?php

/**
 * Recursive version CJSON
 *
 * @url http://yiiframework.ru/forum/viewtopic.php?f=3&t=6997&p=62655#p62655
 * @author (anton44eg from yiiframework.ru) and Anton Smile42RU Piskunov
 */
class JSON extends CJSON
{

    public static function encode($var)
    {
        switch(gettype($var)){
            case 'boolean':
                return $var ? 'true' : 'false';

            case 'NULL':
                return 'null';

            case 'integer':
                return (int) $var;

            case 'double':
            case 'float':
                return str_replace(',', '.', (float) $var); // locale-independent representation

            case 'string':
                if(($enc = strtoupper(Yii::app()->charset)) !== 'UTF-8')
                    $var = iconv($enc, 'UTF-8', $var);

                if(function_exists('json_encode'))
                    return json_encode($var);

                // STRINGS ARE EXPECTED TO BE IN ASCII OR UTF-8 FORMAT
                $ascii = '';
                $strlen_var = strlen($var);

                /*
                 * Iterate over every character in the string,
                 * escaping with a slash or encoding to UTF-8 where necessary
                 */
                for($c = 0; $c < $strlen_var; ++$c){

                    $ord_var_c = ord($var{$c});

                    switch(true){
                        case $ord_var_c == 0x08:
                            $ascii .= '\b';
                            break;
                        case $ord_var_c == 0x09:
                            $ascii .= '\t';
                            break;
                        case $ord_var_c == 0x0A:
                            $ascii .= '\n';
                            break;
                        case $ord_var_c == 0x0C:
                            $ascii .= '\f';
                            break;
                        case $ord_var_c == 0x0D:
                            $ascii .= '\r';
                            break;

                        case $ord_var_c == 0x22:
                        case $ord_var_c == 0x2F:
                        case $ord_var_c == 0x5C:
                            // double quote, slash, slosh
                            $ascii .= '\\' . $var{$c};
                            break;

                        case (($ord_var_c >= 0x20) && ($ord_var_c <= 0x7F)):
                            // characters U-00000000 - U-0000007F (same as ASCII)
                            $ascii .= $var{$c};
                            break;

                        case (($ord_var_c & 0xE0) == 0xC0):
                            // characters U-00000080 - U-000007FF, mask 110XXXXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c, ord($var{$c + 1}));
                            $c+=1;
                            $utf16 = self::utf8ToUTF16BE($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xF0) == 0xE0):
                            // characters U-00000800 - U-0000FFFF, mask 1110XXXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c, ord($var{$c + 1}), ord($var{$c + 2}));
                            $c+=2;
                            $utf16 = self::utf8ToUTF16BE($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xF8) == 0xF0):
                            // characters U-00010000 - U-001FFFFF, mask 11110XXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c, ord($var{$c + 1}), ord($var{$c + 2}), ord($var{$c + 3}));
                            $c+=3;
                            $utf16 = self::utf8ToUTF16BE($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xFC) == 0xF8):
                            // characters U-00200000 - U-03FFFFFF, mask 111110XX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c, ord($var{$c + 1}), ord($var{$c + 2}), ord($var{$c + 3}), ord($var{$c + 4}));
                            $c+=4;
                            $utf16 = self::utf8ToUTF16BE($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xFE) == 0xFC):
                            // characters U-04000000 - U-7FFFFFFF, mask 1111110X
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c, ord($var{$c + 1}), ord($var{$c + 2}), ord($var{$c + 3}), ord($var{$c + 4}), ord($var{$c + 5}));
                            $c+=5;
                            $utf16 = self::utf8ToUTF16BE($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;
                    }
                }

                return '"' . $ascii . '"';

            case 'array':
                /*
                 * As per JSON spec if any array key is not an integer
                 * we must treat the the whole array as an object. We
                 * also try to catch a sparsely populated associative
                 * array with numeric keys here because some JS engines
                 * will create an array with empty indexes up to
                 * max_index which can cause memory issues and because
                 * the keys, which may be relevant, will be remapped
                 * otherwise.
                 *
                 * As per the ECMA and JSON specification an object may
                 * have any string as a property. Unfortunately due to
                 * a hole in the ECMA specification if the key is a
                 * ECMA reserved word or starts with a digit the
                 * parameter is only accessible using ECMAScript's
                 * bracket notation.
                 */

                // treat as a JSON object
                if(is_array($var)){

                    $counter = 0;
                    $output = '';

                    foreach($var as $k => $v){
                        $counter++;

                        if(is_int($k)){
                            $output .= JSON::encode($v);
                        } else {
                            $output .= '"' . $k . '"' . ':' . JSON::encode($v);
                        }

                        if((count($var) - $counter) != 0){
                            $output .= ',';
                        }
                    }

                }

                if((array_keys($var) === range(0, sizeof($var) - 1))){
                    return '['.$output.']';
                } else {
                    return '{' . $output . '}';
                }

            case 'object':
                if($var instanceof Traversable){
                    $vars = array();
                    foreach($var as $k => $v){
                        $vars[$k] = $v;
                    }
                } else {
                    $vars = get_object_vars($var);
                }

                if(method_exists($var, 'relations')){
                    $relations = $var->relations();

                    if(!empty($relations)){
                        foreach($var->relations() as $name => $relation){
                            $vars[$name] = $var->getRelated($name);
                        }
                    }
                }

                return '{' .
                join(',', array_map(array('JSON', 'nameValue'), array_keys($vars), array_values($vars)))
                . '}';

            default:
                return '';
        }
    }

}