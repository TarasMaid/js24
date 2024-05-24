const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'lightblue';
block.style.color = 'darkblue';
block.style.fontSize = '18px';
document.body.appendChild(block);

const clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);

const menuItems = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');
menuItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
});
document.body.appendChild(ul);

const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
coursesAndDurationArray.forEach(course => {
    const courseBlock = document.createElement('div');
    courseBlock.innerText = `Title: ${course.title}, Duration: ${course.monthDuration} months`;
    document.body.appendChild(courseBlock);
});

coursesAndDurationArray.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('item');

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = course.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = `Duration: ${course.monthDuration} months`;

    courseItem.appendChild(heading);
    courseItem.appendChild(description);

    document.body.appendChild(courseItem);
});

const simpsons = [
    { name: 'Homer', surname: 'Simpson', age: 39, info: 'Father of the family' },
    { name: 'Marge', surname: 'Simpson', age: 36, info: 'Mother of the family' },
    { name: 'Bart', surname: 'Simpson', age: 10, info: 'Son of the family' },
    { name: 'Lisa', surname: 'Simpson', age: 8, info: 'Daughter of the family' },
    { name: 'Maggie', surname: 'Simpson', age: 1, info: 'Baby of the family' }
];
simpsons.forEach(member => {
    const memberBlock = document.createElement('div');
    memberBlock.classList.add('member');
    memberBlock.innerHTML = `
                <h2>${member.name} ${member.surname}</h2>
                <p>Age: ${member.age}</p>
                <p>Info: ${member.info}</p>
            `;
    document.body.appendChild(memberBlock);
});