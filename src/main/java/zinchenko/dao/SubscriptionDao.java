package zinchenko.dao;

import zinchenko.domain.Subscription;

import java.util.List;

public interface SubscriptionDao {

    List<Subscription> findByArticleId(Long articleId);

    List<Subscription> findByCategoryId(Long categoryId);

}
