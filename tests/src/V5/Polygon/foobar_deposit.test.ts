import { processTest, populateTransaction } from "../../test.fixture";

const contractName = "FooBar";

const testLabel = "foobar"; // <= Name of the test
const testDirSuffix = "foobar_deposit"; // <= directory to compare device snapshots to
const testNetwork = "polygon";
const signedPlugin = false;

const contractAddr = "0xaaf8233ca3f2f7238c7cd68f2c63b9a57718410c";
const chainID = 137;

// From : https://polygonscan.com/tx/0xe48fb846e22ec5b30cfa9d65392c9929bb846530e1ee03b386bc95d3f001e189
const inputData = "0xf340fa010000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa84174";

const serializedTx = populateTransaction(contractAddr, inputData, chainID);

const devices = [
    {
        name: "nanos",
        label: "Nano S",
        steps: 12, // <= Define the number of steps for this test case and this device
    },
    {
        name: "nanox",
        label: "Nano X",
        steps: 8, // <= Define the number of steps for this test case and this device
    },
    {
        name: "nanosp",
        label: "Nano S+",
        steps: 8, // <= Define the number of steps for this test case and this device
    },
];

devices.forEach((device) => {
    processTest(
        device,
        contractName,
        testLabel,
        testDirSuffix,
        "",
        signedPlugin,
        serializedTx,
        testNetwork
    );
});
