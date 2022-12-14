import React, { Component } from "react";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Hilevich extends Component{    
    render() {
    return (
        <>
            <h1>Нил Гилевич</h1>
            <div class="who-is-this"> 
                {/*я не знаю, почему картинка не отображается*/}
                <img src="../../assets/NIl1jpg.jpg" width="100" hight="100" alt=""/> 
                <p class="person_about">Ни́л Семёнович Гиле́вич (белор. Ні́л Сымо́навіч Гіле́віч; 30 сентября 1931, дер. Слобода Логойского района Минской области — 29 марта 2016, Минск) — переводчик, литературовед, фольклорист, общественный деятель. Народный поэт Беларуси (1991), Заслуженный деятель науки Белорусской ССР (1980). Лауреат Государственной премии Белорусской ССР имени Янки Купалы (1980). Лауреат Международной премии имени Х. Ботева (1986). Кандидат филологических наук, профессор. Член Союза писателей СССР (1954).</p>
            </div>
            
            <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="1931 – 1940-е"
                    dateInnerStyle={{ background: '#333', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Детство</h3>
                    <p>
                    Родился 30 сентября 1931 года в д. Слобода Логойского района Минской 
                    области в крестьянской семье. Настоящее имя — Нинел, впоследствии сменил 
                    имя на Нил[3]. Брат — белорусский писатель М. Гиль.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="1940-е – 1960-e"
                    dateInnerStyle={{ background: '#333', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Учеба</h3>
                    <p>
                    В середине 1940-х некоторое время работал сельским почтальоном[4]. 
                    Окончил Минское педагогическое училище имени Н. К. Крупской (1951), 
                    филологический факультет Белорусского государственного университета (1956) 
                    и аспирантуру при нём. 
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="1960-e – 1990-е"
                    dateInnerStyle={{ background: '#333', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Работа</h3>
                    <p>
                    В 1951 году работал учителем в одной из школ Минска, 
                    в 1960—1986 годы — на кафедре белорусской литературы БГУ.
                    С 1958 по 1963 годы работал также литературным консультантом газеты «Звязда». 
                    В 1980—1989 годы — первый секретарь правления Союза писателей Белорусской ССР. 
                    С 1989 года — председатель ТБМ им. Франциска Скорины, главный редактор бюллетеня 
                    данной организации «Наша слова». Депутат Верховного Совета XI и XII созывов 
                    (1985—1995), председатель Комитета по образованию, культуре и сохранению 
                    исторического наследия в 1990—1995, член Президиума Верховного Совета Белорусской 
                    ССР.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="2016"
                    dateInnerStyle={{ background: '#333', color: '#fff' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3>Смерть</h3>
                    <p>
                    29 марта 2016 года скончался в Минске от онкологического заболевания. 
                    На тот момент ему было 84 года. Похоронен 1 апреля 2016 года на 
                    Кальварийском кладбище рядом с могилой супруги. 23 ноября 2018 года на 
                    могиле Нила Гилевича был открыт надгробный памятник.
                    </p>
                </TimelineItem>
            </Timeline>
            
            <div class="map-on-right">
                <div class="awards-creativity">
                    <h2>Награды и премии</h2>
                    <ul>
                        <li>Народный поэт Беларуси (30 сентября 1991 года) — за большие заслуги в развитии белорусской художественной литературы</li>
                        <li>Заслуженный деятель науки Белорусской ССР (1980)</li>
                        <li>Государственная премия Белорусской ССР имени Янки Купалы (1980) — за книгу поэзии «У добрай згодзе» и переводческую деятельность</li>
                        <li>Международная премия имени Х. Ботева (1986) — за революционную поэзию и публицистику</li>
                        <li>Орден Трудового Красного Знамени</li>
                        <li>Орден Дружбы народов (29 сентября 1981 года) — за заслуги в развитии советской литературы и в связи с пятидесятилетием со дня рождения</li>
                        <li>Орден князя Ярослава Мудрого ІІІ степени (19 августа 2006 года, Украина) — за весомый личный вклад в развитие международного сотрудничества, укрепление авторитета и положительного имиджа Украины в мире, популяризацию её исторических и современных достижений</li>
                        <li>Медаль Франциска Скорины (11 сентября 1990 года) — за выдающиеся исследования истории Белоруссии, достижения в области национального языка, литературы, культурно-просветительной деятельности</li>
                        <li>Орден Кирилла и Мефодия I степени (НРБ)</li>
                        <li>Орден Югославской звезды с лентой (Югославия)</li>
                    </ul>
                    <h2>Творчество</h2>
                    <p>Дебютировал в 1946 году, издал несколько сборников поэзии, в том числе для детей.</p>
                    <p>Занимался переводами, преимущественно с болгарского (в частности, переводил Христо Ботева, Ивана Вазова, Пейо Яворова, Гео Милева, Николу Вапцарова, Петко Славейкова, Анастаса Стоянова и других), словенского и сербохорватского языков.</p>
                    <p>Занимался также исследованием белорусского народного фольклора и литературоведением. Написал 15 пьес, но ни одна не была поставлена (за исключением радиопостановки по роману «Родныя дзеці»)[4].</p>
                    <p>В конце 2013 года вышла последняя книга из 23-томного собрания сочинений писателя.</p>
                </div>
                <div class="map-and-video">
                    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/aIAJ_02aDd8"></iframe>
                    <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Minsk+(Place)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
            
        
            <h2>Библиография</h2>
            <ul class="list-of-works">
                <li>«Песня ў дарогу» (1957)</li>
                <li>«Прадвесне ідзе па зямлі» (1959)</li>  
                <li>«Сцяжок на мачце» (1959)</li>  
                <li>«Званковы валет» (1961)</li>  
                <li>«Неспакой» (1961)</li>  
                <li>«Сіні домік, сіні дом» (1961)</li>  
                <li>«Да новых венікаў» (1963)</li>  
                <li>«Зялёны востраў» (1963)</li>  
                <li>«Бальшак» (1965)</li>  
                <li>«Дождж-грыбасей» (1966)</li>  
                <li>«Перазовы» (1967)</li>  
                <li>«Лісце трыпутніку» (1968)</li>  
                <li>«Ці грэх, ці 2» (1970)</li>  
                <li>«Загадкі» (1971)</li>  
                <li>«А дзе ж тая крынічанька» (1972)</li>  
                <li>«Русалка на Нарачы» (1974)</li>  
                <li>«Як я вучыўся жыць» (1974)</li>  
                <li>«Запаветнае» (1975)</li>  
                <li>«Актавы» (1976)</li>  
                <li>«У добрай згодзе» (1979)</li>  
                <li>«Начлег на буслянцы» (1980), сборник пьес</li>  
                <li>«Калі рана ўстанеш» (1984)</li>  
                <li>«Святлынь» (1984)</li>  
                <li>«Родныя дзеці» (1985), роман в стихах</li>  
                <li>«Добры чалавек» (1987)</li>  
                <li>«Повязь» (1987)</li>  
                <li>«Перажыўшы вайну» (1988), повесть</li>  
                <li>«Кантора» (1989)</li>  
                <li>«Дыялог на хаду» (1990)</li>  
                <li>«Роднае слова»</li>  
            </ul>
        </>
    );
}
}
export default Hilevich;
