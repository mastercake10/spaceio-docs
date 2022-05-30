# Developer API

All API relevant classes can be found inside the `de.Linus122.SafariNet.API` package.
## Capture/Release listener

You can listen for the catch and/or release event and cancel it by modifying the status:

Listener class:
```java
import de.Linus122.SafariNet.API.Status;
import de.Linus122.SafariNet.API.Listener;

import org.bukkit.Bukkit;
import org.bukkit.entity.Entity;
import org.bukkit.entity.Player;

public class SafariNetListener implements Listener {

    public void playerCatchEntity(Player player, Entity entity, Status status) {
        // do something
        // status.setCancelled(true);
    }

    public void playerReleaseEntity(Player p, Entity e, Status s) {
      // do something
    } 

}
```

Registering the listener class (do this in your main etc):
```java
SafariNetListener safarinetListener = new SafariNetListener();
SafariNet.addListener(safarinetListener);
```
## Checking for Safarinet

```java
SafariNet.isSafariNet(itemStack);
```
