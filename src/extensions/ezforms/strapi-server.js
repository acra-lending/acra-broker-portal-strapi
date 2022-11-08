module.exports = (plugin) => {

    plugin.services.formatData = () => ({
        formatData(data) {
            return data.name;
        }

    })

    return plugin;
};