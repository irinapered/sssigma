/* Ваш CSS стиль */
body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    background-color: #F2F1F6;
    display: flex;
    align-items: baseline;
    justify-content: center;
    min-height: 100vh;
}


.navigation,
.title-image {
    width: 100%;
}

.commands {
    background-color: white;
    width: 85%;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 10px;
    margin-top: 50px;
    margin: auto;
}
.commands {margin-top: 50px;}


.command-title,
.command-action {
    display: inline-block;
    width: 99%;
    margin-right: -100%;
    vertical-align: bottom;
    cursor: pointer;
}
.command-title:hover,
.command-action:hover {
    color: black; /* Изменение цвета текста при наведении */
}

.command-action {
    color: gray;
    text-align: right;
}

h1 {
    margin: 0;
    color: rgb(0, 0, 0);
}


.fas.fa-chevron-down {
    transition: transform 0.4s ease;;
}



.command-list {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
}
.command-block-url {
    padding: 10px;
    font-size: 20px;
    background-color: rgba(128, 128, 128, 0.25);
    margin-top: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
}
.command-block {
    padding: 10px;
    font-size: 20px;
    background-color: white;
    margin-top: 5px;
}
.command-block-url:first-child {
    margin-top: 10px; /* Отступ между основным блоком и блоком с первой командой */
}
.command-block:first-child {
    padding: 5px;
    background-color: white;
    width: 100%;
    cursor: default;
}
.command-block:last-child,
.command-image {
    padding: 0;
    background-color: white;
    width: 100%;
    margin-bottom: 3px;
    cursor: default;
}

.command-block-url:hover {
    background-color: #464646; /* Цвет при наведении */
    color: white; /* Изменение цвета текста при наведении */
}



.command,
.command-description {
    display: inline-block;
    width: 100%;
    margin-right: -100%;
    vertical-align: bottom;
}

.command-description {
    color: gray;
    font-style: italic;
    text-align: right;
}

/* Отвечает за открытие и закрытие блока с командами */
.expanded {
    max-height: 1610px;
}
