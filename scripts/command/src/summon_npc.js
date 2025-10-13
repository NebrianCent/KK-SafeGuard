import { newCommand } from '../handle';

newCommand({
    name:"summon_npc",
    description:"Summons a NPC at your location",
    ownerOnly: true,
    run: (data) => {
        data.player.runCommand("function admin_cmds/summon_npc");
    }
})
