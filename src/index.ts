import './reset.scss'
import './style.scss'

import { fetchAdvice } from './fetchAdvice'
import { translation } from './translation';
import { copy_to_clipboard } from './copy';

const $loader = <HTMLElement>document.querySelector('.loader');
const $en = <HTMLElement>document.querySelector('.en');
const $ko = <HTMLElement>document.querySelector('.ko');
const $btn = <HTMLButtonElement>document.querySelector('.gen-btn');
const $copyBtnBox = <HTMLButtonElement>document.querySelector('.copy-btn-box');
const $copyBtnEn = <HTMLButtonElement>document.querySelector('.copy-btn-en');
const $copyBtnKo = <HTMLButtonElement>document.querySelector('.copy-btn-ko');

let bull = true;

// 생성 버튼 클릭
$btn.addEventListener("click", () => {
	if (!bull) return
	
	bull = false;
	$btn.disabled = true; // 버튼 연속 클릭 방지 비활성화

	$en.innerHTML = '';
	$ko.innerHTML = '';

	$loader.classList.add('active');
	$copyBtnBox.classList.remove('active');
	$copyBtnBox.classList.add('inactive');

	// 명언 가져오기
	fetchAdvice()
		.then(res => {
			$loader.classList.remove('active');
			$loader.classList.add('inactive');
			
			$en.innerHTML = res.slip.advice
			
			// 한글 번역
			translation(res.slip.advice)
				.then(res => {
					let [ list ] = res.translated_text;
					let [ sentences ] = list;
					$ko.innerHTML = sentences;

					bull = true;
					$btn.disabled = false; // 버튼 활성화

					$copyBtnBox.classList.remove('inactive');
					$copyBtnBox.classList.add('active');

					if (!$btn.classList.contains('again')) {
						$btn.innerHTML = "다시 생성!";
					}
				})
		})
})

// 복사 버튼
$copyBtnEn.addEventListener("click", (e: any) => {
	copy_to_clipboard($en);
})
$copyBtnKo.addEventListener("click", (e: any) => {
	copy_to_clipboard($ko);
})

