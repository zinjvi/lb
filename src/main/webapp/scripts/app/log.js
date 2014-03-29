define(['log4javascript'], function(log4javascript){
    var logger = log4javascript.getLogger('namespace of log error');
    var appender = new log4javascript.BrowserConsoleAppender();
    appender.setThreshold(log4javascript.Level.DEBUG);
    var layout = new log4javascript.PatternLayout("[%-5p] %m");
    appender.setLayout(layout);
    logger.addAppender(appender);
    return logger;
});