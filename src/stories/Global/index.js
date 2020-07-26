import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  :root {
    --primary-brand-color: #0BB2C3;
    --primary-highlight-color: #85D8E1;
    --primary-linear-color: linear-gradient(103.47deg, #0BB2C3 0%, #5E7CEF 100%);
    --primary-brand-hover-color: #e8fafb;



    --alert-red-color: #FF5252;
    --badge-red: #FF6F6F;
    --genreal-green: #3ACC6B;

    --gray-100-color: #F7F7F7;
    --gray-200-color: #E6E6E6;
    --gray-300-color: #CCCCCC;
    --gray-400-color: #B2B2B2;
    --gray-500-color: #999999;
    --gray-600-color: #7F7F7F;
    --gray-700-color: #666666;
    --gray-800-color: #4C4C4C;
    --gray-900-color: #333333;
    --gray-1000-color: #1A1A1A;
  }
  html {
    box-sizing: border-box;
    font-family: 'Noto Sans CJK TC',-apple-system, sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  *::-webkit-scrollbar {
    // 整體的scrollbar樣式
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    // 軌道的樣式
    background-color: rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar-thumb {
    // bar的樣式
    // background-color: var(--gray-400-color); 
    background-color: transparent; 
    border-radius: 3px;
  }

  *:hover::-webkit-scrollbar-thumb {
    background-color: var(--gray-400-color); 
  }
`;

export default Global;
