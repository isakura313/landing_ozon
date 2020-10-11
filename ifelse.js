let accessAllowed = confirm('Вам уже исполнилось 14 лет?', '');
    if (accessAllowed) {
    alert("Доступ разрешен!");
}   else {
    alert("ДОСТУП ЗАПРЕЩЕН!");
    window.location = 'Access denied!';
}
