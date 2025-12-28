import { compareAsc } from "date-fns";
import * as yup from "yup";

const getPositionExitSchema = (entryDateValue: string) => yup.object().shape({
    price: yup.number().required("Exit price is required").moreThan(0, "Exit price must be a positive number"),
    amount: yup.number().required("Exit amount is required").integer("Must be a whole number").moreThan(0, "Exit amount must be a positive number"),
    date: yup.string().required("Exit date is required").typeError("Exit date must be a valid date").test("exit-dates-valid", "Exit date can't be before entry date", function (date) {
        if (!entryDateValue || !date) return true;
        const entryDateObj = new Date(entryDateValue);
        const exitDateObj = new Date(date);
        return compareAsc(exitDateObj, entryDateObj) !== -1;

    }),
});

export const getSchema = (entryDateValue: string) => yup.object().shape({
    entryDate: yup.string().required("Entry date is required").typeError("Entry date must be a valid date"),
    entryPrice: yup.number().required("Entry price is required").moreThan(0, "Entry price must be a positive number"),
    sharesBought: yup.number().required("Entry amount is required").integer("Must be a whole number").moreThan(0, "Entry amount must be a positive number"),
    ticker: yup.string().required("Ticker is required").min(3, "Ticker must be at least 3 character long"),
    exits: yup.array().of(getPositionExitSchema(entryDateValue)).min(1, "At least one exit is required").required("Exits are required").test("exits-dont-exceed-shares", "Total exit amount cannot exceed shares bought", function (exits) {
        // TODO: check why error doesn't show 
        const { sharesBought } = this.parent;
        if (!sharesBought || !exits) return true;
        const totalSharesSold = exits.reduce((prev, curr) => prev + (curr.amount || 0), 0);
        return totalSharesSold <= sharesBought
    }),
});

