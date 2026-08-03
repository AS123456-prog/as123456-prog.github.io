(function() {
    var path = window.location.pathname;
    var pageName = path.split('/').pop() || 'index.html';
    // 不记录访问记录页面本身
    if (pageName === 'access-log.html') return;
    var logs = JSON.parse(localStorage.getItem('toolbox_logs') || '[]');
    logs.push({
        user: '我',
        page: pageName,
        time: new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
        timestamp: Date.now()
    });
    if (logs.length > 500) {
        logs.splice(0, logs.length - 500);
    }
    localStorage.setItem('toolbox_logs', JSON.stringify(logs));
})();
