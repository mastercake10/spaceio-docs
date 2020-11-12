# Configuration

## Adding new Items

There are two ways of setting a price on your items; either by altering the `sell-prices-simple` item list in your config.yml, or by using the command. Both methods are explained below.

Your players can access the shop by typing `/sell` (configurable)

### Simple prices

Simple prices are saved in the format `MATERIALNAME:PRICE`. Initially, they're all set to zero. Altering these prices will have no effect on meta data values (enchantments, lore, displayname) etc, but it give you a simple opportunity to set prices.

### Using the command

You can set a price on any item in game by using this command:

`/ushop add <price> [Flags ...]`

This command works on items with and without item meta. There are several flags that can be used:

`ignore_enchantments, ignore_durability, ignore_lore, ignore_displayname, ignore_meta`

You can append any of them to the command in order to ignore certain meta data values, so you can make sure that your players are able to sell randomized stuff (like diamond swords with different enchantments) for a base price.

## Converting from EssentialsX worth list

If you have already set up your EssentialsX worth list, you might want to use it for uShop. This is done by typing this simple command:

`/ushop convert`

It will convert all prices inside the `plugins/Essentials/worth.yml` file to uShop.