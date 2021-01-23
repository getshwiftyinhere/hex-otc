const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.buyRadio = document.querySelector('#buyRadio');
st.sellRadio = document.querySelector('#sellRadio');
st.buyLabel = document.querySelector('#buyLabel');
st.sellLabel = document.querySelector('#sellLabel');
st.flap.style.visibility = "collapsed";

st.flap.addEventListener('transitionend', () => {
    UpdateRate();
    if (st.buyRadio.checked) {
        //st.flap.style.color = 'green';
        st.flap.style.backgroundColor = 'green';
        st.flap.style.fontSize = '32px';
        st.toggle.style.transform = 'rotateY(-15deg)';
        st.buyLabel.innerHTML = "&nbsp;";
        st.sellLabel.innerHTML = "SELL";
        setTimeout(() => st.toggle.style.transform = '', 400);
    } else {
        //st.flap.style.color = 'red';
        st.flap.style.backgroundColor = 'red';
        st.flap.style.fontSize = '32px';
        st.toggle.style.transform = 'rotateY(15deg)';
        st.buyLabel.innerHTML = "BUY";
        st.sellLabel.innerHTML = "&nbsp;";
        setTimeout(() => st.toggle.style.transform = '', 400);
    }
})

st.clickHandler = (e) => {
    if (e.target.tagName === 'LABEL') {
        st.flap.style.visibility = "visible";
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    //st.flap.children[0].textContent = st.sellRadio.nextElementSibling.textContent;
});

var i;
function ToggleFix(){
    if(!i){
        document.getElementById('buyLabel').click();
        i = true;
    }
}
document.addEventListener('click', (e) => st.clickHandler(e));