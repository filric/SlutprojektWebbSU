const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    name: String,
    etnicitet: String,
    religon: String,
    age: String,
    message: String,
    enskild: String,
    familjerelation: String,
    slump: String

});

const Bestell = mongoose.model("Bestell", FormSchema);

exports.saveOrder = async function (inName, inEtnicitet, inReligon, inAge, inMessage, inEnskild, inFamiljerelation, inSlump) {
    var Order = Bestell({
        name: inName,
        etnicitet: inEtnicitet,
        religon: inReligon,
        age: inAge,
        message: inMessage,
        enskild: inEnskild,
        familjerelation: inFamiljerelation,
        slump: inSlump

    });

    await Order.save();
};