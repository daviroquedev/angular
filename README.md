# Documentação Angular

## AngularJS Module:
É criado um módulo AngularJS chamado 'myFirstApp' usando angular.module('myFirstApp', []). Esse módulo será usado para definir componentes da aplicação, como controladores, serviços, filtros, etc.

## Controlador (MyFirstController):
Dentro do módulo, é definido um controlador chamado MyFirstController usando 

` .controller('MyFirstController', function ($scope) {...}) `

Esse controlador é vinculado a um elemento no HTML através de ng-controller="MyFirstController".
O controlador define uma variável no $scope chamada name com o valor "Davi".
Também define uma função sayHello no $scope que retorna a string "Hello Coursera!".

## HTML no AngularJS

No HTML, a aplicação AngularJS é inicializada usando ng-app="myFirstApp", onde myFirstApp é o nome do módulo que foi definido anteriormente.
Um elemento <div> utiliza o controlador MyFirstController com ng-controller="MyFirstController".
Há um <input> com ng-model="name", o que significa que qualquer alteração neste input irá refletir automaticamente na variável name do $scope.
A expressão {{name}} dentro do HTML exibirá dinamicamente o valor de name conforme for alterado pelo usuário no input.

ng-model é uma diretiva do AngularJS usada para vincular os elementos de formulário (como <input>, <select>, <textarea>, etc.) a uma propriedade em um escopo AngularJS. Essa diretiva cria um vínculo bidirecional entre o valor do elemento de entrada no DOM e a propriedade no escopo do controlador.

Quando você usa ng-model="name" em um elemento <input>, por exemplo, você está dizendo ao AngularJS para criar uma variável chamada name no escopo do controlador (definido pelo ng-controller) e vincular essa variável ao valor do elemento <input>. Qualquer alteração feita no campo de entrada será refletida automaticamente na variável name do escopo do controlador e vice-versa.

Para exibir o resultado da função sayHello (ou seja, a string "Hello Coursera!"), você precisa invocar essa função dentro das expressões {{}}.

` {{sayHello()}} `
