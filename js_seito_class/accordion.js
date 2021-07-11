(() => {
  // 初期化
  class Accordion {

    constructor(obj){
      console.log('obj', obj.hookName);

      // DOM（HTML内の文書）'#js-accordion'を$elmに代入
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
      const triggerLen = $trigger.length;
      
      // classの中で関数を定義した場合は、「this」を関数実行前に付ける（Accorionクラス内を参照という意味）
      let index = 0;
      while(index < triggerLen){
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }
    // classの中では、関数にconstは不要
    // 「preventDefault()」<a>の効果を無効化
    // 「nextElementSibling」で$trigger[0]の次の要素（"accordion-contents"）を取得
    // 「currentTarget」でクリックされた要素を取得
    clickHandler(e){
      e.preventDefault();
    
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
    
      if($content.style.display === 'block'){
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    }
  }
  // インスタンスを生成
  const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const dummyAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
  });
  
  const miniAccordion = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
  });

})();