const { Gstore, instances } = require("gstore-node");
const { Datastore } = require("@google-cloud/datastore");
const path = require("path");

/* MAKE FRESH REQUIRE TO THE DATASTORE KEYS FILE */
const SOURCE_DATASTORE_KEYS_PATH = "./data_store_keys_source.json";
const OWN_DATASTORE_KEYS_PATH = "./data_store_keys_own.json";

const source_project_id = require(SOURCE_DATASTORE_KEYS_PATH).project_id;
const own_project_id = require(OWN_DATASTORE_KEYS_PATH).project_id;

/* DATABASE CONFIGURATION */
const sourceGstore = new Gstore({ errorOnEntityNotFound: false });
const sourceDatastore = new Datastore({
  projectId: source_project_id,
  keyFilename: path.join(__dirname, SOURCE_DATASTORE_KEYS_PATH),
});

const ownGstore = new Gstore({ errorOnEntityNotFound: false });
const ownDatastore = new Datastore({
  projectId: own_project_id,
  keyFilename: path.join(__dirname, OWN_DATASTORE_KEYS_PATH),
});

sourceGstore.connect(sourceDatastore);
instances.set("00001", sourceGstore);

ownGstore.connect(ownDatastore);
instances.set("00002", ownGstore);

module.exports = { source: sourceGstore, own: ownGstore };
