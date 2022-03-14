using MusicPlayer.Models;

namespace MusicPlayer.Data;

public class PlaylistDetails
{
    public Playlist Playlist { get; set; }

    public List<PlaylistSong> Songs { get; set; }

}