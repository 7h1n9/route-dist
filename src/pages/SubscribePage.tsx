import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const SubscribePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('提交邮箱订阅:', email);
    // 这里可以添加发送到后端的逻辑
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>订阅 | 我的技术博客</title>
        <meta name="description" content="订阅我的技术博客，获取最新的前端开发技巧和React实战经验。" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>订阅更新</h1>
        {subscribed ? (
          <div className={styles.subscribedMessage}>
            <p>🎉 感谢您的订阅！我们已经向 {email} 发送了确认邮件，请查收。</p>
            <p>您将会定期收到我的最新文章和技术分享。</p>
          </div>
        ) : (
          <div className={styles.subscribeForm}>
            <p>想要第一时间获取最新的前端技术和实践经验吗？订阅我的博客，每周为您精选优质内容！</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">邮箱地址</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入您的邮箱地址"
                  required
                  className={styles.emailInput}
                />
              </div>
              
              <button type="submit" className={styles.submitButton}>
                立即订阅
              </button>
            </form>
            
            <div className={styles.privacyNotice}>
              <p>🔒 我们尊重您的隐私，不会泄露您的邮箱信息。您可以随时取消订阅。</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SubscribePage;