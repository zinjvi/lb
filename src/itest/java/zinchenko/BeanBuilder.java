package zinchenko;

import org.apache.commons.lang.reflect.FieldUtils;

public class BeanBuilder {

    private Object bean;

/*    public BeanBuilder() throws Exception, Exception {
        Type type = getClass().getGenericSuperclass();
        ParameterizedType paramType = (ParameterizedType) type;
        this.bean = ((Class<T>) paramType.getActualTypeArguments()[0]).newInstance();
//        this.bean = (T) (ParameterizedType)this.getClass().newInstance();
//                getGenericSuperclass()).getActualTypeArguments()[0]).newInstance();
    }*/

    public static BeanBuilder create(Class clazz) throws Exception {
        BeanBuilder beanBuilder = new BeanBuilder();
        beanBuilder.bean = clazz.newInstance();
        return beanBuilder;
    }

    public BeanBuilder put(String fieldName, Object value) throws Exception {
        FieldUtils.writeField(bean, fieldName, value, true);
        return this;
    }

    public Object build(){
        return bean;
    }

}
