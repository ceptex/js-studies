function red() {
    reset();
    document.querySelector(".test-box").classList.add('red');
}

function green() {
    reset();
    document.querySelector(".test-box").classList.add('green');
}

function blue() {
    reset();
    document.querySelector(".test-box").classList.add('blue');
}

function reset() {
    document.querySelector(".test-box").classList.remove('red');
    document.querySelector(".test-box").classList.remove('green');
    document.querySelector(".test-box").classList.remove('blue');
    document.querySelector(".test-box").classList.remove('reset');
}