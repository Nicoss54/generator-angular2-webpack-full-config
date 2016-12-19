const util = require('util'),
    path = require('path'),
    generators = require('yeoman-generator'),
    yosay = require('yosay'),
    mkdir = require('mkdirp');

module.exports = generators.Base.extend({
    promptUserDialog: function () {
        var done = this.async();

        this.log(yosay(
            'Welcome to the Starter Angular 2 generator!'
        ));

        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name ?'
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            mkdir(this.appName);
            done();
        }.bind(this));
    },
    createFolders: function () {

        // FOLDERS
        mkdir(this.appName + "/client");
        mkdir(this.appName + "/client/app");
        mkdir(this.appName + "/client/app/components");
    },
    copyFiles: function () {

        // files
        this.copy("_package.json", this.appName + "/package.json");
        this.copy("_server.js", this.appName + "/server.js");
        this.copy("_superstatic.json", this.appName + "/superstatic.json");
        this.copy("_tsconfig.json", this.appName + "/tsconfig.json");
        this.copy("_common.js", this.appName + "/webpack/common.js");
        this.copy("_dev.js", this.appName + "/webpack/dev.js");
        this.copy("_prod.js", this.appName + "/webpack/prod.js");
        this.copy("_index.html", this.appName + "/client/index.html");
        this.copy("_polyfills.ts", this.appName+ "client/polyfills.ts");
        this.copy("_vendor.ts", this.appName + "client/vendor.ts");
        this.copy("_styles.css", this.appName + "client/styles.css");
        this.copy("_main.ts", this.appName + "client/app/main.ts");
        this.copy("_app.module.ts", this.appName + "client/app/app.module.ts");
        this.copy("_app.routing.ts", this.appName + "client/app/app.routing.ts");
        this.copy("_app.component.ts", this.appName + "client/app/components/app.component.ts");
        this.copy("_app.component.html", this.appName + "client/app/components/app.component.html");

    }

});