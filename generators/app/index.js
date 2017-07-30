const util = require('util'),
    path = require('path'),
    generators = require('yeoman-generator'),
    yosay = require('yosay'),
    mkdir = require('mkdirp');

module.exports = generators.Base.extend({
    promptUserDialog: function() {
        var done = this.async();

        this.log(yosay(
            'Welcome to the Starter Angular 2 generator!'
        ));

        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name ?'
        }];

        this.prompt(prompts, function(props) {
            this.appName = props.appName;
            mkdir(this.appName);
            done();
        }.bind(this));
    },
    createFolders: function() {

        // FOLDERS
        mkdir(this.appName + "/client");
        mkdir(this.appName + "/client/app");
        mkdir(this.appName + "/client/app/components");
        mkdir(this.appName + "/client/app/components/welcome");
        mkdir(this.appName + "/scripts");
        mkdir(this.appName + "/docker");
    },
    copyFiles: function() {

        this.fs.copy(this.templatePath('_package.json'), this.destinationPath(this.appName + '/package.json'));
        this.fs.copy(this.templatePath('_tslint.json'), this.destinationPath(this.appName + '/tslint.json'));
        this.fs.copy(this.templatePath('_server.js'), this.destinationPath(this.appName + '/server.js'));
        this.fs.copy(this.templatePath('_superstatic.json'), this.destinationPath(this.appName + '/superstatic.json'));
        this.fs.copy(this.templatePath('_tsconfig.json'), this.destinationPath(this.appName + '/tsconfig.json'));
        this.fs.copy(this.templatePath('_common.js'), this.destinationPath(this.appName + '/config/common.js'));
        this.fs.copy(this.templatePath('_dev.js'), this.destinationPath(this.appName + '/config/dev.js'));
        this.fs.copy(this.templatePath('_prod.js'), this.destinationPath(this.appName + '/config/prod.js'));
        this.fs.copy(this.templatePath('_index.html'), this.destinationPath(this.appName + '/client/index.html'));
        this.fs.copy(this.templatePath('_polyfills.ts'), this.destinationPath(this.appName + '/client/polyfills.ts'));
        this.fs.copy(this.templatePath('_vendor.ts'), this.destinationPath(this.appName + '/client/vendor.ts'));
        this.fs.copy(this.templatePath('_styles.scss'), this.destinationPath(this.appName + '/client/styles.scss'));
        this.fs.copy(this.templatePath('_main.ts'), this.destinationPath(this.appName + '/client/app/main.ts'));
        this.fs.copy(this.templatePath('_app.module.ts'), this.destinationPath(this.appName + '/client/app/app.module.ts'));
        this.fs.copy(this.templatePath('_app.routing.ts'), this.destinationPath(this.appName + '/client/app/app.routing.ts'));
        this.fs.copy(this.templatePath('_app.component.ts'), this.destinationPath(this.appName + '/client/app/components/app.component.ts'));
        this.fs.copy(this.templatePath('_app.component.html'), this.destinationPath(this.appName + '/client/app/components/app.component.html'));
        this.fs.copy(this.templatePath('_welcome.component.ts'), this.destinationPath(this.appName + '/client/app/components/welcome/welcome.component.ts'));
        this.fs.copy(this.templatePath('_welcome.component.html'), this.destinationPath(this.appName + '/client/app/components/welcome/welcome.component.html'));
        this.fs.copy(this.templatePath('_welcome.component.scss'), this.destinationPath(this.appName + '/client/app/components/welcome/welcome.component.scss'));
        this.fs.copy(this.templatePath('_.dockerignore'), this.destinationPath(this.appName + '/.dockerignore'));
        this.fs.copy(this.templatePath('_Dockerfile'), this.destinationPath(this.appName + '/docker/Dockerfile'));
        this.fs.copy(this.templatePath('_build-image-docker.sh'), this.destinationPath(this.appName + '/scripts/build-image-docker.sh'));
        this.fs.copy(this.templatePath('_launch-container.sh'), this.destinationPath(this.appName + '/scripts/launch-container.sh'));
    }

});