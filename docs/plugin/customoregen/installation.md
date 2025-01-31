
# Installation

CustomOreGen works best along with a supported **SkyBlock plugin** on the list below.

Without a SkyBlock plugin, CustomOreGen would use the permission of the closest player mining on the generator.


Download the [latest version](https://github.com/mastercake10/CustomOreGen/releases) jar-File and place it into your plugin folder, then restart or reload your server.

## Supported SkyBlock plugins

- [BentoBox](https://download.bentobox.world/) (by Poslovitch and Tastybento)
    - The BentoBox Level Addon is required in order to run CustomOreGen
- [IridiumSkyblock](https://modrinth.com/plugin/iridiumskyblock/) (by IridiumDevelopment)
- [ASkyBlock](https://www.spigotmc.org/resources/askyblock.1220/) (by Tastybento)
- [AcidIsland](https://www.spigotmc.org/resources/acidisland.581/) (by Tastybento)
- [uSkyBlock](https://www.spigotmc.org/resources/uskyblock.2280/) (by R4zorax)
- [Island World](https://www.spigotmc.org/resources/island-world-skyblock-replacement.2757/) (by Gnacik)
- [SuperiorSkyblock2](https://www.spigotmc.org/resources/%E2%9A%A1%EF%B8%8F-superiorskyblock2-%E2%9A%A1%EF%B8%8F-the-best-core-on-market-%E2%9A%A1%EF%B8%8F-1-16-support.63905/) (by Oma_R)
- [PlotSquared](https://www.spigotmc.org/resources/plotsquared-v4-v5-out-now.1177/) (by IntellectualSites)
- [FabledSkyBlock](https://gitlab.com/Songoda/fabledskyblock) (by Songoda)

Altought there are hooks implemented for all these Skyblock plugin, we found that *BentoBox* works best with CustomOreGen.

## Adding your own SkyBlock hook

If you're an author of a SkyBlock, you can add your hook implementation in [this package](https://github.com/mastercake10/CustomOreGen/tree/dev/src/main/java/xyz/spaceio/hooks) and create a pull request. There are basically four methods to add:

```java
public interface SkyblockAPIHook {
	/**
	 * Returns the island level for a defined player uuid
	 *
	 * @param uuid UUID of the island owner
	 * @param in World world of the island
	 * @return island level
	 */
	public int getIslandLevel(UUID uuid, String inWorld);

	/**
	 * Gets the owner of an island on a certain location
	 *
	 * @param loc location to check for island
	 * @return island owner UUID
	 */
	public Optional<UUID> getIslandOwner(Location loc);

	/**
	 * Obtains the names of the skyblock worlds
	 *
	 * @return the names of the skyblock worlds
	 */
	public String[] getSkyBlockWorldNames();

	/*
	 * Calls the specific SkyBlock-API to make it aware of a block placement
	 *
	 */
	public void sendBlockAcknowledge(Block block);
}
