// Опишіть своїми словами що таке Document Object Model (DOM)
// представление документа html в виде дерева тегов в соответствии с объектной моделью документа, каждый html тег является объектом (все эти объекты доступны при помощи javascript, с пом. которого можем добавлять,  стилизировать и менять)
// Яка різниця між властивостями HTML-елементів innerHTML та innerText?
// innerHTML покажет текстовую инфу кода именно к одному элементу кода
// innerText будет возвращать именно текстовую часть страницы
// Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
// getElementById, getElementsByClassName, getElementsByTagName, querySelectorAll, querySelector
// лучше всего использовать querySelectorAll так как он более универсальный и имеет новый синтаксис 


// Завдання
// Знайти всі параграфи на сторінці та встановити колір фону #ff0000

// Знайти елемент із id="optionsList". Вивести у консоль.
// Знайти батьківський елемент та вивести в консоль. 
//Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

// Встановіть в якості контента елемента з класом testParagraph наступний параграф -
// This is a paragraph

// Отримати елементи
// , вкладені в елемент із класом main-header і вивести їх у консоль. 
//Кожному з елементів присвоїти новий клас nav-item.
//Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.

const paragraphs = document.querySelectorAll("p")
paragraphs.forEach(paragraph => {
    paragraph.style.color = "#ff0000"
})
const list = document.getElementById("optionsList")
console.log(list)
const plist = list.parentElement
console.log(plist)
const chlist = list.children
console.log(chlist)
if (chlist.length > 0){
    [...chlist].forEach(item => {
        console.log(item.nodeName)
        console.log(item.nodeType)
    })
}
const paragraph2 = document.querySelector("#testParagraph")
paragraph2.textContent = "This is a paragraph"
console.log(paragraph2)
const mainHeader = document.querySelector(".main-header")
console.log(mainHeader)
const mainHeaderChildren = mainHeader.children
for (let i = 0; i < mainHeaderChildren.length; i++){
    console.log(mainHeaderChildren[i])
    mainHeaderChildren[i].classList.add("nav-item")
}
console.log(mainHeaderChildren)
const newTitle = document.querySelectorAll(".section-title")
for (let i = 0; i < newTitle.length; i++){
    console.log(newTitle[i])
    newTitle[i].classList.remove("section-title")
}
console.log(newTitle)