import React from "react";
import Unsplash from 'unsplash-js';

class Auth extends React.Component {

constructor(props) {
    super(props);

  
}

componentDidMount() {
    
// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
 // accesskey из настроек вашего приложения
 accessKey: "ll-IwcAr6fMAQOsJ4t5B9DGmf6JvcJqmfCvWhKJQD8U",
 // Application Secret из настроек вашего приложения
 secret: "kv_uj_N1rvhWn6GhDu9pIcngLc0rEAh9vZcPvYFgIOg",
 // Полный адрес страницы авторизации приложения (Redirect URI)
 // Важно: этот адрес обязательно должен быть указан в настройках приложения
//на сайте Unsplash API/Developers
 callbackUrl: "https://bekfola.github.io/skillbox-js"
});
// Генерируем адрес страницы аутентификации на unsplash.com
// и указываем требуемые разрешения (permissions)
const authenticationUrl = unsplash.auth.getAuthenticationUrl([
 "public",
 "write_likes"
]);

//setUnsplash
// Отправляем пользователя по этому адресу
location.assign(authenticationUrl);


// const code = location.search.split('code=')[1];
// Если код передан, отправляем запрос на получение токена
// if (code) {
//  unsplash.auth.userAuthentication(code)
//  .then(res => res.json())
//     .then(json =>
//     {
//     // Сохраняем полученный токен
//     unsplash.auth.setBearerToken(json.access_token);
//     // Теперь можно сделать что-то от имени пользователя
//     // Например, поставить лайк фотографии
//     //unsplash.photos.likePhoto("kBJEJqWNtNY");
//     unsplash.photos.list({});
//     unsplash.photos.list({ page: 2, perPage: 15 });
//     this.setState(
//         photos =  Object.values(unsplash.photos.list({}))
//     )
//     });

    // }
}
    

    render() {
        
        return (
            <div>
                <div>Auth</div>
                <div></div>
            </div>
            )
    }
}


export default Auth;