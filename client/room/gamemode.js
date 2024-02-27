// Anarchic.
// License: © Mak.



import {
    Teams, Build, Spawns, BuildBlocksSet
} from 'pixel_combats/room'
import { Color } from 'pixel_combats/basic'

// Создание команд
Teams.Add('Blue', 'Teams/Blue', new Color(0, 0, 1, 0))
var blueTeam = Teams.Get('Blue')
blueTeam.Spawns.SpawnPointsGroups.Add(1)
blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue

// Обработчик выбора команды
Teams.OnRequestJoinTeam.Add((p, t) => {
    t.add(p)
})