module.exports = {
  global: {
    siteName: 'サンプルサイト',
    siteUrl: 'https://example.com',
    pageMeta: {
      home: {
        id: 1,
        name: 'home',
        title: 'トップページ',
        description: 'サイトのトップページです',
        ogpImage: 'assets/img/icon/ogp_default.jpg',
        type: 'website',
        path: '/'
      },
      page1: {
        id: 2,
        name: 'page1',
        title: 'ページ1',
        description: 'ページ1のディスクリプションです',
        ogpImage: 'assets/img/icon/ogp_default.jpg',
        type: 'article',
        path: '/page1.html'
      }
    }
  }
}