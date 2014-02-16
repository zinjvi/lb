package zinchenko;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.ArticleDao;
import zinchenko.domain.Article;

import javax.transaction.Transaction;
import java.util.List;


public class ArticleRestImpl implements ArticleRest {

    @Autowired
    ArticleDao articleDao;

    public ArticleRestImpl() {
    }

    @Override
    @Transactional
    public Article get(int id) {
        Order order = new Order();
        order.setName("name-get-" + id);
        return null;
    }

    @Override
    @Transactional
    public List<Article> getAll() {
//        List<Order> orders = new ArrayList<Order>();
//        Order order = new Order();
//        order.setName("nn");
//        orders.add(order);

        List<Article> articles = articleDao.findAll();
        return articles;
    }

    public ArticleDao getArticleDao() {
        return articleDao;
    }

    public void setArticleDao(ArticleDao articleDao) {
        this.articleDao = articleDao;
    }
}
