import React, {createRef, useEffect} from 'react'; 


class AppProduct extends HTMLElement {

}

window.customElements.define('app-product', AppProduct);

const Product = () => {
    const appProductRef = createRef();

    useEffect(()=> {
        const shadowRoot = appProductRef.current.attachShadow({mode: 'closed'});
        shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>';
        const script = document.createElement('script');
        shadowRoot.appendChild(script);
    })
    
    return (<app-product ref={appProductRef}></app-product>)
};

export default Product;