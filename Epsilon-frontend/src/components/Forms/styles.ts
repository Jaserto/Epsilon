import styled, {keyframes} from "styled-components";
import { motion } from 'framer-motion';

export const FormSection = styled.div`
	padding: 20px 0;
`;

export const FormTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 35px;
	color:black;
	line-height: 1.1;
	font-weight: 600;
`;

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 30px;
	background: white;
	border: 20px;
	flex: 1;
	max-width:600px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}
	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;
`;

export const FormMessage = styled(motion.div)`
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
	color:${({ error }:any) => (error ? 'red' : 'green')};
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;
	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1.3rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 1.2rem;
	margin-bottom: 0.3rem;
	color: #afafaf;
`;
export const FormImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	/* color: #fff; */
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: black;
	}
`;

export const DEFAULT_DIV = styled.div`

`;

export const Section = styled(DEFAULT_DIV)`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 6rem;
`;

export const Row = styled(DEFAULT_DIV)`
	
`;

export const Column = styled(DEFAULT_DIV)`

`;

export const Text = styled.span`
	
`;

export const Button = styled.button`

	border-radius: 5px;
	background: #001bff;
	color: #fff;
	outline: none;
	border: none;
	cursor: pointer;
	white-space: nowrap;
	&:hover {
		transition: all 0.3s ease-out;
		background-color: #0a1573;
	}
`;