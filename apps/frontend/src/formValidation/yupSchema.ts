import * as yup from "yup";

const positionExitSchema = yup.object().shape({
    price: yup.number().required("Exit price is required").moreThan(0, "Exit price must be a positive number"),
    date: yup.string().required("Exit date is required").typeError("Exit date must be a valid date"),
    amount: yup.number().required("Exit amount is required").integer("Must be a whole number").moreThan(0, "Exit amount must be a positive number"),
});

export const yupSchema = yup.object().shape({
    exits: yup.array().of(positionExitSchema).required("At least one exit is required"),
    entryDate: yup.string().required("Entry date is required").typeError("Entry date must be a valid date"),
    entryPrice: yup.number().required("Entry price is required").moreThan(0, "Entry price must be a positive number"),
    entryAmount: yup.number().required("Entry amount is required").integer("Must be a whole number").moreThan(0, "Entry amount must be a positive number"),
    ticker: yup.string().required("Ticker is required").min(3, "Ticker must be at least 1 character long"),
});

