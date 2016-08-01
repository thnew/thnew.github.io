using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaConsole.Data.Entities
{
    public class FollowerNote : IEntiity
    {
        public string Username { get; set; }
        public DateTime FollowedSince { get; set; }
        public DateTime UnfollowedAt { get; set; }

        public User Owner { get; set; }
    }
}