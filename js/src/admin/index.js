import app from 'duroom/admin/app';
import ExtensionPage from './components/ExtensionPage';

app.initializers.add('duroom-canonical', app => {
    app.extensionData
        .for('duroom-canonical')
        .registerPage(ExtensionPage);
});
