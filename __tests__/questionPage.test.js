const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { openOptions, closePopup, filterOptions, optionSelected, startQuiz, nothingSelected } = require('../scripts/questionPage.js');

let dom;
let document;

beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../questionPage.html'), 'utf8');
    
    dom = new JSDOM(html);
    document = dom.window.document;

    global.document = document;
    global.window = dom.window;
    global.HTMLElement = dom.window.HTMLElement;
});

test('openOptions should display the popup', () => {
    const popup = document.getElementById('popup');
    expect(popup.style.display).toBe(''); 

    openOptions();

    expect(popup.style.display).toBe('block');
});

test('closePopup should hide the popup', () => {
    const popup = document.getElementById('popup');
    
    popup.style.display = 'block';
    expect(popup.style.display).toBe('block');
    closePopup();
    
    expect(popup.style.display).toBe('none');
});

test('optionSelected should return True if any checkbox is selected', () => {
    const checkbox = document.querySelector('#option1');
    checkbox.checked = true;
    expect(optionSelected()).toBe(true);
    checkbox.checked = false;
    expect(optionSelected()).toBe(false);
});