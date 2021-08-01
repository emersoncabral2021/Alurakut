import styled from 'styled-components';

const Box = styled.div`
background: white;
border-radiua: 8px;
padding:16px;
margin-bottom:10px;
/*css pre-pronto*/

.boxLink{
    font-size:12px;
    color:#2E7BB4;
    text-decoration:none;
    font-weigth:800;
}

.title{
    font-size:32px;
    margin-bottom:20px;
    font-weigth:400;

}

.subTittle{
    font-size:32px;
    margin-bottom:20px;
    font-weigth:400;
}
.smallTittle{
    font-size:16px;
    margin-bottom:20px;
    font-weigth:700;
    color:#333333;

}
hr{
    margin-top:12px;
    margin-bottom:8px;
    border-color:transparent;
    border-bottom-color:#ECF2FA;

}
input{
    width:100%;
    background-color:#F4F4F4;
    color:#333333;
    border:0;
    padding:14px 16px;
    margin-bottom:14px;
    border-radius:10000px;
    ::placeholder{
        color:#333333;
        opacity:1;
    }

}

button{
    border:0;
    padding:8px 12px;
    color:#FFFFFF; 
    border-radius:10000px;
    background-color:#6F92BB;
}
`;

export default Box;