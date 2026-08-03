(function() {
    // 获取当前用户名（如果已设置）
    const username = localStorage.getItem('toolbox_user');
    // 获取当前页面名称
    const path = window.location.pathname;
    const pageName = path.split('/').pop() || 'index.html';

    // 如果已登录且当前不是登录页或记录页，则记录访问
    if (username && pageName !== 'access-log.html') {
        const logs = JSON.parse(localStorage.getItem('toolbox_logs') || '[]');
        logs.push({
            user: username,
            page: pageName,
            time: new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }),
            timestamp: Date.now()
        });
        // 只保留最近 500 条记录
        if (logs.length > 500) {
            logs.splice(0, logs.length - 500);
        }
        localStorage.setItem('toolbox_logs', JSON.stringify(logs));
    }
})();
