## Тестовое задание
- для AccessGuard добавить проверку, если есть декоратор AuthAccess, то проверить, чтобы пользователь был авторизован
- для ResourceGuard добавить логику 
  - Извлечение метаданных из декоратора ResourceAccess
  - Чекать роли, через accesscontrol
  - Чекать принадлежность объекта через поле user, оно по идее как овнер
- реализовать AuthMiddleware, которая будет чекать jwt и складывать user в реквест
- настроить контекст для graphql, чтобы в него вкладывать user
- починить регистрацию
  - Добавить поле для пароля
  - Использовать bcrypt
  - Сделать проверку, чтобы не затирать существующих пользователей
  - Сохранить в бд
- реализовать команду/хендлер для обновления профиля

- для UpdateProfileDto нужно будет добавить свойства, которых сейчас нет
- для всех dto сделать элементарную валидацию
- для ролей сделать миграцию, которая будет создавать дефолтные роли с заданными пермишенами
  - для user это будет crud с possession Own
  - для support это будет crud с possession Any
- ручка для получения своего профиля
- ручка для получения списка профилей
- реализовать хранение данных о последнем входе пользователя, для последующего вывода
- прикрутить почтовик, который будет слать уведомления
- реализовать сагу, которая будет триггериться на регистрацию и формировать ивент на отправку письма

## Бонусом
- реализовать 2FA через Google

## Примеры graphql запросов

-HEADERS: 
Content-Type: application/json
authorization: Bearer {Токен полученный при авторизации}

1) query {
  me {
    id,
    email,
    profile {
        firstName
    }
   }
}


2) mutation {
 updateProfile(input:{
  firstName: "Ilya",
  lastName: "Poluvyanov",
}){
      success,
     message
}
}

3) query {
  user(id: 2) {
    id,
    email,
    profile {
        firstName
    }
   }
}

4) query {
  users {
      rows {
          id,
          email
      },
      count
  }
}

5) mutation {
 register(input:{
  email: "manager@gmail.com",
  password: "123456789",
  roleId:2,
}){
  success,
  message
}
}

6) mutation {
 login(input:{
  email: "manager@gmail.com",
  password: "123456789"
}){
  email,
  accessToken
}
}
