package zinchenko.rest;

import java.lang.reflect.ParameterizedType;

public class Dada<T> {

    private Class<T> typeOfT;

    @SuppressWarnings("unchecked")
    public Dada() {
        this.typeOfT = (Class<T>)
                ((ParameterizedType)getClass()
                        .getGenericSuperclass())
                        .getActualTypeArguments()[0];
    }

    public T get() throws IllegalAccessException, InstantiationException {
        return (T) typeOfT.newInstance();
    }

}
