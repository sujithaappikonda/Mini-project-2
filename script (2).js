use("AttendanceManagement")

db.students.insertMany([
{
student_id: 101,
name: "Rahul",
course: "BCA",
year: 1
},
{
student_id: 102,
name: "Priya",
course: "BCA",
year: 1
},
{
student_id: 103,
name: "Kiran",
course: "BCA",
year: 1
}
])

db.attendance.insertMany([
{
student_id: 101,
date: "2026-06-21",
status: "Present"
},
{
student_id: 102,
date: "2026-06-21",
status: "Absent"
},
{
student_id: 103,
date: "2026-06-21",
status: "Present"
}
])

db.students.find()

db.attendance.find()

db.attendance.find({ student_id: 101 })

db.attendance.updateOne(
{ student_id: 102, date: "2026-06-21" },
{ $set: { status: "Present" } }
)

db.attendance.deleteOne({
student_id: 103,
date: "2026-06-21"
})