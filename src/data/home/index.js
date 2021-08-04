import {JSField, JSObject, Text} from "@/classes";
import my_photo from '@/assets/home/dorich.jpg'
import contactsBg from './contacts-bg.jpg'

export default {
    block1:{
        p1: {
            t1: new Text('Привет, меня зовут Николай Дорофеев.', 'Hello, my name is Nikolay Dorofeev.'),
            t2: new Text('Я ', 'I am '),
            t3: new Text('JavaScript разработчик', 'JavaScript developer'),
            t4: new Text('И это мой персональный сайт.', 'And this is my personal site.')
        },
    },
    block2: {
        terminal: {
            h1: new Text('Привет мир!', 'Hello world!'),
            t1: new Text('На данном сайте вы можете ознакомиться с моим ', 'Here you can see my '),
            t2: new Text('портфолио', 'portfolio'),
            t3: new Text(', ознакомиться с моим ', ', familiarize with my '),
            t4: new Text('резюме', 'resume'),
            t5: new Text(' , почитать ', ' , read '),
            t6: new Text('новости', 'news'),
            t7: new Text(' из моей жизни разработчика.', ' from my developer life.')
        },
        my_photo: my_photo,
        h1: new Text('Коротко обо мне', 'Little about me') ,
        p1: new Text('Молодой, талантливый, энергичный. \n' +
            'Меня зовут Николай Дорофеев, я JavaScript разработчик, сейчас обучаюсь на 3-ем курсе ТПУ ' +
            'по направлению "Информационные системы и технологии в бизнесе и промышленности".\n' +
            'Полученных знаний и собственного опыта работы с вёрсткой сайтов, базами данных, серверами ' +
            'уже вполне достаточно, чтобы создавать Одностраничные Веб-Приложения, которые помогут ' +
            'вам или вашему бизнесу предстать перед интернет сообществом в новом свете.\n' +
            'Одностраничные Веб-Приложения - сайты, которые не требуют загрузки отдельных страниц. ' +
            'Этот подход позволяет получить новый опыт взаимодействия с продуктом без лишних задержек.',
            'Young, talented, energetic. \n' +
            'My name is Nikolay Dorofeev, I am a JavaScript developer, now I am a 3rd year student at TPU ' +
            'in the direction of "Information systems and technologies in business and industry".\n' +
            'The acquired knowledge and personal experience of working with site layout, databases, and servers ' +
            'is already quite enough to create Single Page Web Applications ' +
            'that will help you or your business appear in a new light before the Internet community \n' +
            'Single Page Web Applications - sites that do not require loading separate pages. ' +
            'This approach allows you to get a new experience with the product without unnecessary delays.'),
        bg: contactsBg,
        contactsHeader: new Text('Мои контакты', 'My contacts'),
        contacts: [
            { href: 'mailto:d.orich@yandex.com', icon: 'mdi-email', text: 'email' },
            { href: 'https://t.me/d0rich', icon: 'mdi-telegram', text: 'telegram' },
            { href: 'https://github.com/d0rich', icon: 'mdi-github', text: 'github' },
            { href: 'https://vk.com/d0rich', icon: 'mdi-vk', text: 'vk' },
        ],
        objects: [
            new JSObject([
                new JSField( { key: new Text('Имя', 'Name'), value: new Text('Николай', 'Nikolay') } ),
                new JSField( { key: new Text('Фамилия', 'Surname'), value: new Text('Дорофеев', 'Dorofeev') } ),
                new JSField( { key: new Text('Возраст', 'Age'), value: new Text('20', '20') } ),
                new JSField( { key: new Text('Статус', 'Status'), value: new Text('Студент', 'Student') } )
            ], new Text('Личность', 'Person')),
            new JSObject([
                new JSField( { key: new Text('Никнейм', 'Nickname'), value: new Text('d0rich', 'd0rich') } ),
                new JSField( { key: new Text('Фронтенд', 'Frontend'), value: new Text('Vue.js', 'Vue.js') } ),
                new JSField( { key: new Text('Бэкенд', 'Backend'), value: new Text('Node.js, Python', 'Node.js, Python') } ),
                new JSField( { key: new Text('База данных', 'Database'), value: new Text('PostgreSQL, MongoDB', 'PostgreSQL, MongoDB') } )
            ], new Text('Разработчик', 'Developer'))
        ]
    },
    block3: {
        title: new Text('Последние проекты', 'Last projects')
    }

}
