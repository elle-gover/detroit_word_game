"use strict";

//Controller

function DetroitCtrl(){
    const vm = this;
    vm.words = [
        "slow roll",
        "bbq and r&b",
        "plant",
        "sink",
        "experience",
        "dream car",
        "picket fence",
        "detroit",
        "neighbor",
        "mexican coke",
        "stranger's potluck",
        "bee sting",
        "peach pie",
        "sweaty",
        "pleasant",
        "evening",
        "dirt toes",
        "patio"
    ];

    vm.phrases = [
        "belle isle cruise",
        "5pm on a friday",
        "do they have a patio?",
        "the food trucks are open",
        "actually cold",
        "to bike or not to bike",
        "do you have cold brew?",
        "bring something green",
        "roof party mumblecore",
        "feel like something cold",
        "a blue night for a fire",
        "nettle hug"
    ];
    
    vm.print = [];

    //word functions
    vm.addWord = () => {
        //generate random # btwn 0 and vm.words.length
        let i = Math.floor(Math.random() * vm.words.length);
        console.log(i);
        const newEl = {
            printedEl: vm.words[i],
            styled: false
        }
        //push item with that index into newEL
        vm.print.push(newEl);
    }

    vm.addWordStyled = () => {
        let i = Math.floor(Math.random() * vm.words.length);
        console.log(i);
        const newEl = {
            printedEl: vm.words[i],
            styled: true
        }
        vm.print.push(newEl);
    }

    //phrases
    vm.addPhrase = () => {
        let i = Math.floor(Math.random() * vm.phrases.length);
        console.log(i);
        const newEl = {
            printedEl: vm.phrases[i],
            styled: false
        }
        vm.print.push(newEl);
    }

    vm.addPhraseStyled = () => {
        let i = Math.floor(Math.random() * vm.phrases.length);
        console.log(i);
        const newEl = {
            printedEl: vm.phrases[i],
            styled: true
        }
        //take item with index in words and push into vm.phrases
        vm.print.push(newEl);
    }

    //reset
    vm.reset = () => {
        vm.print = [];
        console.log(vm.print);
    }

}



angular
.module("SummerWords")
.controller("DetroitCtrl", DetroitCtrl);