import { check } from "express-validator";

// Função que retorna um array de validações para a rota de registro de empresa
export const registerCompanyValidations = [
  check("cnpj").notEmpty().withMessage("CNPJ é obrigatório"),
  check("email").isEmail().withMessage("E-mail inválido"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Senha deve ter no mínimo 6 caracteres"),
];

export const loginCompanyValidations = [
  check("cnpj").notEmpty().withMessage("CNPJ é obrigatório"),
  check("password").notEmpty().withMessage("Senha é obrigatória"),
];
