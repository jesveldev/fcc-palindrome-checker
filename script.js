"use strict";


document.querySelector("#check-btn").addEventListener("click",(e)=>{
	e.preventDefault();

	let inputValue = document.querySelector("#text-input").value.toString().trim();
	let resultParagraph = document.querySelector("#result");

	if(inputValue=='') alert("Please input a value");

	else{
		let word = inputValue;

		word = word.split("");

		let real_word = word.filter(e=> (
								e.toLowerCase()=='a' ||
								e.toLowerCase()=='b' ||
								e.toLowerCase()=='c' ||
								e.toLowerCase()=='d' ||
								e.toLowerCase()=='e' ||
								e.toLowerCase()=='f' ||
								e.toLowerCase()=='g' ||
								e.toLowerCase()=='h' ||
								e.toLowerCase()=='i' ||
								e.toLowerCase()=='j' ||
								e.toLowerCase()=='k' ||
								e.toLowerCase()=='l' ||
								e.toLowerCase()=='m' ||
								e.toLowerCase()=='n' ||
								e.toLowerCase()=='ñ' ||
								e.toLowerCase()=='o' ||
								e.toLowerCase()=='p' ||
								e.toLowerCase()=='q' ||
								e.toLowerCase()=='r' ||
								e.toLowerCase()=='s' ||
								e.toLowerCase()=='t' ||
								e.toLowerCase()=='u' ||
								e.toLowerCase()=='v' ||
								e.toLowerCase()=='w' ||
								e.toLowerCase()=='x' ||
								e.toLowerCase()=='y' ||
								e.toLowerCase()=='z' ||
								e.toLowerCase()=='0' ||
								e.toLowerCase()=='1' ||
								e.toLowerCase()=='2' ||
								e.toLowerCase()=='3' ||
								e.toLowerCase()=='4' ||
								e.toLowerCase()=='5' ||
								e.toLowerCase()=='6' ||
								e.toLowerCase()=='7' ||
								e.toLowerCase()=='8' ||
								e.toLowerCase()=='9'
								));

		if(real_word.length == 1) resultParagraph.innerText=`${real_word.join()} is a palindrome.`;
		else if(real_word.length % 2 != 0){
			let forward_fragments = [],
				backward_fragments = [];
			// let	contador = 0; 

			for(let i = 0; i < (real_word.length/2)-0.5; i++){

				forward_fragments.push(real_word[(real_word.length/2)+0.5+i].toLowerCase());

				// console.log("Forward "+contador+":"+real_word[(real_word.length/2)+0.5+i] );

				backward_fragments.push(real_word[((real_word.length/2)-0.5-i)-1].toLowerCase());

				// console.log("Backward "+contador+":"+real_word[((real_word.length/2)-0.5-i)-1] );

				// contador++;

			}

			// console.log(forward_fragments,backward_fragments);

			if(forward_fragments.join("") == backward_fragments.join("")){

				resultParagraph.innerText=`${word.join("")} is a palindrome.`;

			}else resultParagraph.innerText=`${word.join("")} is not a palindrome.`;

		}else{
			let forward_fragments = [],
				backward_fragments = [];
			// let	contador = 0;

			for(let i = 0; i < real_word.length/2; i++){

				forward_fragments.push(real_word[(real_word.length/2)+i].toLowerCase());

				// console.log("Forward "+contador+":"+real_word[(real_word.length/2)+i] );

				backward_fragments.push(real_word[((real_word.length/2)-i)-1].toLowerCase());

				// console.log("Backward "+contador+":"+real_word[((real_word.length/2)-i)-1] );

				// contador++;

			}

			// console.log(forward_fragments,backward_fragments);

			if(forward_fragments.join("") == backward_fragments.join("")){

				resultParagraph.innerText=`${word.join("")} is a palindrome.`;

			}else resultParagraph.innerText=`${word.join("")} is not a palindrome.`;

		}
	}
});