package zinchenko;

import javax.ws.rs.PathParam;

public class OrderInfoImpl implements OrderInfo {

    @Override
    public Order getOrder(@PathParam("orderId") int orderId) {
        Order order = new Order();
        order.setName("name-" + orderId);
        return order;
    }
}
