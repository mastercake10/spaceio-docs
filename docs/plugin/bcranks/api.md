# Developer API


## Maven repository
No maven repository yet, just import the .jar file to your workspace at this point.

## Rankup Check Listener

```java
//Lets listen for a rankup
//Im not good with listener names...dont mind that
@EventHandler
public void onCustomBuyAttempt(RankupCheckEvent e) {
    //Lets grab the player
    Player player = e.getPlayer();
    //Lets grab the rank
    String rank = e.getRank(); //Lets say its "Owner"

    if (!rank.equals("Owner")) return;

    //Now that we have our rank and player, and we know the rank is "Owner"
    //We dont want to give the rank away so easily...

    //We want the player to be operator and cancel if he isn't
    //in this case we just need to check if he's not op.
    if (!player.isOp()) {
        //Okay he's not an operator...
        //With this listener you can "set" cancel message, provided you specify a name(usually plugin name)
        e.setPluginRequester(this.getName()); //The name of this plugin
        e.setCancelMessage("Not an operator"); //the reason why we cancel it
        e.setCancelled(true); //actually cancel it.
        //Done! they can not gain the rank unless they are operator and are told why.
    }
}
```

## OpenRankSystem

```java
    @EventHandler
    public void onRankOpen(OpenRankSystem e) {
        boolean isTimed = e.getTimed();
        int slot = e.getSlot();

        if (!isTimed) {
            ItemStack stack = e.getItemStack().clone();
            stack.setType(Material.NAME_TAG);
            e.getInventory().setItem(slot, stack);
        }
    }

    @EventHandler
    public void addRankLore(OpenRankSystem e) {
        boolean isTimed = e.getTimed();
        int slot = e.getSlot();
        ItemStack stack = e.getItemStack().clone();
        
        
        if (isTimed) {
            stack.addUnsafeEnchantment(Enchantment.DAMAGE_UNDEAD, 3);
            ItemMeta meta = stack.getItemMeta();
            meta.addItemFlags(ItemFlag.HIDE_ENCHANTS);
            stack.setItemMeta(meta);
            e.getInventory().setItem(slot, stack);
        }
    }
}
```
