const emojis = require("../config/emojis.json");
const colors = require("../Config/colors");
module.exports = {
  resolveMember: function(guild, content) {
    let member;
    let members = guild.members.cache;

    if (members.has(content)) member = members.get(content);
    if (
      members.find(m =>
        m.user.username.toLowerCase().includes(content.toLowerCase())
      )
    )
      member = members.find(m =>
        m.user.username.toLowerCase().includes(content.toLowerCase())
      );
    if (
      members.find(m =>
        m.user.tag.toLowerCase().includes(content.toLowerCase())
      )
    )
      member = members.find(m =>
        m.user.tag.toLowerCase().includes(content.toLowerCase())
      );
    if (
      members.find(m =>
        m.displayName.toLowerCase().includes(content.toLowerCase())
      )
    )
      member = members.find(m =>
        m.displayName.toLowerCase().includes(content.toLowerCase())
      );
    return member;
  },
  resolveRole: function(guild, content) {
    let role;
    let roles = guild.roles.cache;

    if (roles.has(content)) role = roles.get(content);
    if (roles.find(r => r.name.toLowerCase().includes(content.toLowerCase())))
      role = roles.find(r =>
        r.name.toLowerCase().includes(content.toLowerCase())
      );
    return role;
  },
  formatDate: function(date) {
    let formatted;
    let Months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec"
    };
    let format = `${
      Months[date.getMonth()]
    }, ${date.getDate()}, ${date.getFullYear()}`;
    formatted = format;
    return formatted;
  },
  cleanPerms: function(permissions) {
    let permission = "";
    if (permissions.has("ADMINISTRATOR"))
      return (permission = "All Permissions");
    else if (permissions.has("MANAGE_GUILD")) permission = "Manage Guild";
    else if (permissions.has("BAN_MEMBERS")) permission = "Ban Members";
    else if (permissions.has("KICK_MEMBERS")) permission = "Kick Members";
    else if (permissions.has("MANAGE_ROLES")) permission = "Manage Roles";
    else if (permissions.has("MANAGE_MESSAGES")) permission = "Manage Messages";
    else permission = "Basic Permissions";
    return permission;
  },
  resolveRegion: function(region) {
    let onRegions = {
      brazil: `${emojis.flags.brazil} Brazil`,
      europe: `${emojis.flags.europe} Europe`,
      hongkong: `${emojis.flags.hong_kong} Hong Kong`,
      india: `${emojis.flags.india} India`,
      japan: `${emojis.flags.japan} Japan`,
      russia: `${emojis.flags.russia} Russia`,
      singapore: `${emojis.flags.singapore} Singapore`,
      southafrica: `${emojis.flags.south_africa} South Africa`,
      sydney: `${emojis.flags.australia} Sydney`,
      uscentral: `${emojis.flags.united_states} US Central`,
      useast: `${emojis.flags.united_states} US East`,
      ussouth: `${emojis.flags.united_states} US South`,
      uswest: `${emojis.flags.united_states} US West`
    };
    let onRegion = onRegions[region.replace("-", "")];
    return onRegion;
  },
  permissions: {
    owners: ["296782318285225984", "283115481227853824", "324338354982486017", "476156640110968834", "768642157279707226"]
  }
};
