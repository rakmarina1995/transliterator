let rule = [],
    srcText = document.getElementById('src-text'),
    transText = document.getElementById('trans-text'),
    translateBtn = document.getElementById('translate-btn'),
    clearBtn = document.getElementById('clear-btn'),
    copyBtn = document.getElementById('copy-btn');

Promise.all(
    [
        fetch('rule.json')
    ]
)
    .then(async ([ruleResponse]) => {
        const ruleJson = await ruleResponse.json();
        return [ruleJson];
    })
    .then(response => {
        rule = response[0];
        init();
    });


function init() {
    // srcText.onkeydown = (e) => {
    //     const reg = /[A-Za-z]/;
    //     console.log(e.key);
    //     if (reg.test(e.key)) {
    //         console.log('Включите кириллицу')
    //     }
    // }
    translateBtn.onclick = (e) => {
        let src = Array.from(srcText.value);
        let arr = src.map(letter => {
            let change = rule.find(item => {
                return item.letter == letter;
            })
            if (change && change.hasOwnProperty('value')) {
                return letter = change.value;


            } else {
                return letter;
            }
        })
        transText.value = arr.join('');
    }
    clearBtn.onclick = (e) => {
        srcText.value = "";
        transText.value = "";
    }
    copyBtn.onclick = (e) => {
        transText.select();
        document.execCommand("copy");

    }
}
