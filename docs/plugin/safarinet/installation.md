 
# Installation

Buy and download the [latest version](https://www.spigotmc.org/resources/safarinet-premium-mob-catcher-plugin.9732/) jar-File and place it into your plugin folder, then restart or reload your server. Keep in mind that you will only see the resource when you have created an account on spigotmc.org.

## Troubleshooting

- With 1.14 being different the default configuration file had to be changed, this may cause issues on older versions. Since 1.13.x configuration file did not work properly with 1.14 so needed an update. If you find yourself in a case where it does not work on your version properly, simply try renaming the items, for instance: LEGACY_ENDER_EYE to get it working for version below 1.14.

- When you found a strange behaviour make sure to remove op status and if used the * perm aswell. Than only add the safarinet permission nodes to your server/person, while making sure the perms used are enabled as per config(i.e permission per mob).

## Plugin compatibility

SafariNet should work out of the box with most protection plugins listed in [supported plugins](./usage.md#supported-plugins).

However, here a few setup notes for some plugins.

### SuperiorSkyblock2

By default, players can release and capture entities on an island when they have the privilege (or permission) `safarinet`.
To set this permission for other players on your island inside the UI, you can add this to the `plugins/SuperiorSkyblock2/menus/permissions.yml` file:
```yml
permissions:
  safarinet:
    display-menu: true
    permission-enabled:
      type: GHAST_SPAWN_EGG
      name: '&6SafariNet'
      lore:
        - '&7Allows the player to capture and release animals.'
        - '&7Current: &aALLOW&7.'
    permission-disabled:
      name: '&6SafariNet'
      type: GHAST_SPAWN_EGG
      lore:
        - '&7Allows the player to capture and release animals.'
        - '&7Aktuell: &cDENY&7.'
    role-permission:
      name: '&6SafariNet'
      type: GHAST_SPAWN_EGG
      lore:
        - '&7Allows the player to capture and release animals.'
        - '&7Role: &e{}&7.'
        - ''
        - '{0}'
    has-access:
      sound:
        type: ENTITY_EXPERIENCE_ORB_PICKUP
        volume: 0.2
        pitch: 0.2
    no-access:
      sound:
        type: BLOCK_ANVIL_PLACE
        volume: 0.2
        pitch: 0.2
```
