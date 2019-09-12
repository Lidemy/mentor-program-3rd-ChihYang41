import React, { Component } from 'react';
import './home.css';
import Loading from '../utils/Loading';
import PostCard from '../post/PostCard';

class Home extends Component {
  componentDidMount() {
    const { getLatestPosts } = this.props;
    getLatestPosts();
  }

  render() {
    const { history, isLoadingGetLatestPosts, latestTenPosts } = this.props;
    return (
      <div>
        <h2>Home Page</h2>
        <p>E 世代最ㄅㄧㄤˋ的事情，就是到戰略高手上奇摩家族，一邊用即時通把妹，或是帶著最新的哈電族跟同一掛的麻吉去西門町壓馬路。</p>
        <p>如果有人看不懂，哇哩咧，你們就真的是LKK了。</p>
        {
          isLoadingGetLatestPosts
            ? <Loading />
            : (
              <div className="latest-posts-list">
                <h3>最新文章</h3>
                <div className="post-list">
                  <PostCard posts={latestTenPosts} key={latestTenPosts.id} history={history} />
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

export default Home;
